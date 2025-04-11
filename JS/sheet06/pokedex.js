const pokedex = document.getElementById("pokedex");
const search = document.getElementById("search");

function capitalize(str) 
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function load_pokemon(name) 
{
    try 
    {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let data = await res.json();

        let lower_name = name.toLowerCase();
        let evo_stage = await find_evo(name);

        let types = data.types.map(t => t.type.name);

        pokedex.innerHTML += `
        <div class="card">
                <div class="pokemon">
                    <img src="${data.sprites.front_default}" alt="">
                    <div class="id">ID / ${data.id}</div>
                </div>
                <div class="info2">
                   <div class="name">${capitalize(lower_name)}</div>
                   <div class="type">
                        ${types.map(type => `<p>${capitalize(type)}</p>`).join('')}
                   </div>
                   <div class="evolution">
                        <div class="main-text">${evo_stage}</div>
                    </div>
                </div>
            </div>`;
    }
    catch (error)
    {
        console.error("Error loading Pokemon", error);
        pokedex.innerHTML = '<p>Error loading pokemon</p>'
    }
}

async function find_evo(name) {
    try {
        let evo_stage = "";

       let species_res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
       let species_data = await species_res.json();

       let evo_chain_url = species_data.evolution_chain.url;
       let evo_chain_res = await fetch(evo_chain_url);
       let evo_chain_data = await evo_chain_res.json();

       let chain = evo_chain_data.chain;

        // First phase
        if (name === chain.species.name)
            evo_stage = "First phase";
        // Second phase
        else if (chain.evolves_to.length && name === chain.evolves_to[0].species.name) 
            evo_stage = `Evolves to: ${capitalize(chain.species.name)}`;
        // Third phase
        else if (chain.evolves_to.length && chain.evolves_to[0].evolves_to.length &&
            name === chain.evolves_to[0].evolves_to[0].species.name
        )
            evo_stage = `Evolves to: ${capitalize(chain.evolves_to[0].species.name)}`;
        else
            evo_stage = "Unknown evolution stage";

        return evo_stage;

    } catch (error) {
        console.error("Error finding evolution", error);
        return "Unknown evolution stage";
    }
}

async function generate_pokedex()
{
    let poke_list_url = await fetch("https://pokeapi.co/api/v2/pokemon/");
    let poke_list = await poke_list_url.json();

    for (let i = 0; i < 20; i++)
        await load_pokemon(poke_list.results[i].name);
}

async function search_coincidences(letters) 
{
    try
    {
        let poke_list_url = await fetch("https://pokeapi.co/api/v2/pokemon/");
        let poke_list = await poke_list_url.json();
        
        let coincidences = [];

        for (let i = 0; i < 20; i++)
        {
            if (poke_list.results[i].name.startsWith(letters))
                coincidences.push(poke_list.results[i].name);
        }

        if (coincidences.length === 0) {
            pokedex.innerHTML = "<p>No results founded</p>";
            return;
        }

        for (const name of coincidences)
            await load_pokemon(name);
    }
    catch (error)
    {
        console.error("Error searching coincideneces:", error);
        pokedex.innerHTML = "<p>Error searching coincidences</p>";
    }
}

search.addEventListener("keypress", function (e) 
{
    if (e.key == "Enter")
    {
        pokedex.innerHTML = "";
        search_coincidences(search.value.toLowerCase().trim());
    }     
});

generate_pokedex();