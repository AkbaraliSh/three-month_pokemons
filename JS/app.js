var elRow=document.querySelector('.row');

for(pokemon of pokemons){
    
    var newCol=document.createElement('div');
    
    var newdiv=document.createElement('div');
    
    var newnumber=document.createElement('h1');
    
    var newname=document.createElement('h2');
    
    var newImage=document.createElement('img');
    var newtypeList=document.createElement('ul');
    
    var newmeasurement=document.createElement('div');
    var resize=document.createElement('img');
    var weight=document.createElement('img');
    var newmeasur1=document.createElement('span');
    var newmeasur2=document.createElement('span');
    var newcandy=document.createElement('p');
    var candy_count=document.createElement('p');
    var newegg=document.createElement('p');
    var spawn_chance=document.createElement('p');
    var avg_spawns=document.createElement('p');
    var spawn_time=document.createElement('time');
    var newmultipliersList=document.createElement('ul');
    
    
    
    
    newnumber.textContent=pokemon.num;
    newname.textContent=pokemon.name;
    newmeasur1.textContent=pokemon.height;
    newmeasur1.style.marginRight='5px';
    newmeasur2.textContent=pokemon.weight;
    newcandy.textContent='candy: '+pokemon.candy;
    candy_count.textContent='candy_count: '+pokemon.candy_count;
    newegg.textContent='egg: '+pokemon.egg;
    spawn_chance.textContent='spawn_chance: '+pokemon.spawn_chance;
    avg_spawns.textContent=' avg_spawns: '+pokemon.avg_spawns;
    spawn_time.textContent='spawn_time: ' +pokemon.spawn_time;
    
    
    
    for(tip of pokemon.type){
        var newtypeli=document.createElement('li');
        newtypeli.textContent='type: '+tip;
        newtypeList.appendChild(newtypeli);
    }
    
    
    
    
    elRow.setAttribute('class','row')
    newCol.setAttribute('class' ,'item col-3 m-3 p-0')
    newdiv.setAttribute('class','newdiv');
    newnumber.setAttribute('class','number mb-0')
    newname.setAttribute('class','pokemon_name mb-0')
    newImage.setAttribute('class','Image')
    newImage.setAttribute('src',pokemon.img);
    newImage.setAttribute('alt',pokemon.name)
    newtypeList.setAttribute('class','typelist');
    newmeasurement.setAttribute('class','measurs')
    newcandy.setAttribute('class','candy');
    candy_count.setAttribute('class','candy_count');
    newegg.setAttribute('class','egg');
    spawn_chance.setAttribute('class','spawn_chance');
    avg_spawns.setAttribute('class',' avg_spawns');
    
    
    resize.setAttribute('src','./img/resize.svg');
    resize.setAttribute('width','24');
    resize.setAttribute('height','20');
    resize.setAttribute('alt','resize logo');
    
    weight.setAttribute('src','./img/weight.svg');
    weight.setAttribute('width','24');
    weight.setAttribute('height','20');
    weight.setAttribute('alt','weight logo');
    
    
    newCol.appendChild(newdiv);
    newdiv.appendChild(newnumber);
    newdiv.appendChild(newname);
    newmeasurement.appendChild(resize);
    newmeasurement.appendChild(newmeasur1);
    newmeasurement.appendChild(weight);
    newmeasurement.appendChild(newmeasur2);
    newCol.appendChild(newmeasurement);
    newCol.appendChild(newImage);
    
   
    
    
    newtypeList.appendChild(newcandy);
    newtypeList.appendChild(candy_count);
    newtypeList.appendChild(newegg);
    newtypeList.appendChild(spawn_chance);
    newtypeList.appendChild( avg_spawns);
    newtypeList.appendChild(spawn_time);
    for(var multip of pokemon.multipliers){
        var newtypeli=document.createElement('li');
        newtypeli.textContent='multipliers: '+multip;
        newtypeList.appendChild(newtypeli);
    }
    for(var weaknes of pokemon.weaknesses){
        var newtypeli=document.createElement('li');
        newtypeli.textContent='weaknesses: '+weaknes;
        newtypeList.appendChild(newtypeli);
    }
    
    
    
    
    if (pokemon.next_evolution!=null) {
        
        for(evolution of pokemon.next_evolution){
            var newList=document.createElement('ul');
            var newitemnum=document.createElement('p');
            var newitemname=document.createElement('p');
            newitemnum.setAttribute('class','newitemnum')
            newitemname.setAttribute('class','newitemname')
            newitemnum.textContent='next_evolution: '+evolution.num;
            newitemname.textContent=evolution.name;
            var newli=document.createElement('li');
            newli.appendChild(newitemnum);
            newli.appendChild(newitemname);
            newList.appendChild(newli)
            newtypeList.appendChild(newList)
        }
    }
    if (pokemon.prev_evolution!=null) {
        
        for(evolution of pokemon.prev_evolution){
            var newprevList=document.createElement('ul');
            var newprevitemnum=document.createElement('p');
            var newprevitemname=document.createElement('p');
            newprevitemnum.setAttribute('class','newitemnum')
            newprevitemname.setAttribute('class','newitemname')
            newprevitemnum.textContent='prev_evolution: '+evolution.num;
            newprevitemname.textContent=evolution.name;
            var newprevli=document.createElement('li');
            newprevli.appendChild(newprevitemnum);
            newprevli.appendChild(newprevitemname);
            newprevList.appendChild(newprevli)
            newtypeList.appendChild(newprevList)
        }
    }
    
   
    
    newCol.appendChild(newtypeList);
    
    elRow.appendChild(newCol);
    
}

