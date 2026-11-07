# Análisis de Pokeapi

URL: https://pokeapi.co/api/v2/pokemon/1

## Qué devuelve

Un JSON con toda la info de **bulbasaur** (el pokemon con id 1). Algunos campos importantes:

- `id`: 1
- `name`: "bulbasaur"
- `height`: 7 (está en decímetros, o sea 0.7 m)
- `weight`: 69 (está en hectogramos, o sea 6.9 kg)
- `base_experience`: experiencia que da al vencerlo
- `types`: array con los tipos (grass y poison)
- `abilities`: array con las habilidades (overgrow y chlorophyll)
- `stats`: array con hp, attack, defense, special-attack, special-defense y speed
- `sprites`: URLs de las imágenes. La que usamos es `sprites.front_default`
- `moves`: lista muy larga con todos los movimientos

Muchos campos no traen la info completa, sino un objeto con `name` y `url`. Para ver el detalle hay que hacer otro GET a esa url (por ejemplo, la habilidad o el tipo).

## Con Postman

Haciendo un GET a la misma URL:

- Status: **200 OK**
- Content-Type: `application/json`
- Devuelve el mismo JSON que en el navegador, pero formateado y más fácil de recorrer
- Es una respuesta bastante pesada, sobre todo por `moves` y `game_indices`

Si cambiamos el número del final (`/pokemon/2`, `/pokemon/3`...) trae otro pokemon. Con eso hacemos el fetch del 1 al 20 en React.
