export default {
    props : ['heros'],
    template : `
        <div>
            <ul>
                <li v-for="hero in heros"> {{hero.name}} 
                    <my-del :heros="heros" :delId="hero.id"></my-del>
                    <my-edit :heros="hero"></my-edit>
                </li>
            </ul>
        </div>
    `
}