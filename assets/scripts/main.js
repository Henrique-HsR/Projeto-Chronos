function toggleDark() {
    document.body.removeAttribute('id');
    document.body.setAttribute('id', 'dark')

    document.querySelector('#dark').innerHTML =  CreatePageDark();
    
    //document.body.setAttribute('class', 'dark');
}

function toggleLight(){
    document.querySelector('#dark').innerHTML = cleanPage()
    document.body.setAttribute('id', 'light')
    document.querySelector('#light').innerHTML = createPage()
    //document.querySelector('#dark').innerHTML =  CreatePage();
}

function createPage(){
    return `
    <header>
    <div>
        <img src="assets/images/logo-chronos-blue.png" alt="Chronos">
        <menu id="itens">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Ajuda</a></li>
            </ul>
        </menu>
        <button onclick="toggleDark()"></button>
    </div>
</header>
<main class="light">
    <article>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim labore optio nihil obcaecati, adipisci sunt facilis impedit cumque fuga unde incidunt hic? Animi iste, cumque libero dolor impedit explicabo quia.</p>
    </article>
</main>

<footer>

</footer>
`
}

function cleanPage(){
    return ''
}

function CreatePageDark(){
    cleanPage();
    return `
    <header class="dark">
    <div>
        <img src="assets/images/logo-chronos-white.png" alt="Chronos">
        <menu id="itens">
            <ul>
                <li><a class="dark" href="#">Inicio</a></li>
                <li><a class="dark" href="#">Contato</a></li>
                <li><a class="dark" href="#">Sobre</a></li>
                <li><a class="dark" href="#">Ajuda</a></li>
            </ul>
        </menu>
        <button class="dark" onclick="toggleLight()"></button>
    </div>
</header>
<main class="dark">
    <article>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim labore optio nihil obcaecati, adipisci sunt facilis impedit cumque fuga unde incidunt hic? Animi iste, cumque libero dolor impedit explicabo quia.</p>
    </article>
</main>

<footer class="dark">

</footer>
`
}

document.querySelector('#light').innerHTML =  createPage();


//document.querySelector('#dark').innerHTML =  CreatePageDark();