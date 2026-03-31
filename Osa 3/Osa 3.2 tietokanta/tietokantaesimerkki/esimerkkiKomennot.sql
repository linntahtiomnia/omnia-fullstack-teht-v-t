// Luodaan taulu nimeltä "notes", jossa on neljä saraketta: 
// "id", "content", "important" ja "date". "id" on automaattisesti kasvava kokonaisluku, 
// joka toimii taulun pääavaimena. "content" on teksti, joka ei saa olla tyhjä. 
// "important" on totuusarvo, joka kertoo, onko muistiinpano tärkeä vai ei. 
// "date" on aika, jolloin muistiinpano luotiin tai päivitettiin.
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    important boolean,
    date time
);

// Lisätään tauluun yksi muistiinpano, jossa on teksti "Relational databases rule the world" ja joka on tärkeä.
insert into notes (content, important) values ('Relational databases rule the world', true);

// Haetaan kaikki muistiinpanot taulusta "notes".
select * from notes;