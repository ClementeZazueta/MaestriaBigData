# Guidelines
- Cuando trabajemos en algo nuevo sea un feature, fix, hot fix, etc..., siempre antes de hacer commit hay que jalar cambios del remoto y actualizar el local, obviamente si ya tenemos cambios deberemos meter al stash los cambios que tenemos en el local y tras crear una nueva rama despues de actualizar el local con el remoto, entonces volveremos a colocar los cambios que hicimos con stash pop.
- Deberemos identificar el tipo de nombre que le daremos a los branches de git por ejemplo:
    - Cosas nuevas o nuevos Features sera -> Feature/[Descripcion de lo que se esta trabajando]
    - Arreglos o parches Fix/[Descripcion de lo que se esta arreglando]
    - Tech debt o solo mejoras Chore/[Descripcion de lo que se esta trabajando]
    - Cherry picks CherryPicks/[Una descripcion del commit al que le hacemos el cherry pick]
- De aqui en adelante crearemos dos ramas bases master (que ya existe) y dev (esta nunca existe por default pero la crearemos y sera otra rama base donde se trabajara siempre como ambiente de desarollo). La creacion de la rama dev solo se hara al inicio de cada proyecto ya que solo hace falta crearlo desde el inicio.
- Nadie que no sea el owner o que se la hayan otorgado los permisos adecuados puede hacer commit y push directo a dev o master sin hacer Pr, el owner obviamente si en caso de ser requerido un hot fix o patch.
- Para los mensajes usaremos lo siguient:
    - Si hay un error usaras si puedes texto en color rojo o un emoji al inicio asi 🔴 + el mensaje de error.
    - Si ahy un warnning usaras si puedes texto en color naranja o un emoji al inicio asi 🟠 + el mensaje de advertencia.
    - Si hay un suggestion/advice/information usaras si puedes texto en color azul o un emoji al inicio asi 🔵  + el mensaje informativo.
    - Si todo esta OK usaras texto en color verde en si puedes o un emoji al inicio de 🟢 + el mensaje del resultado.

# Applies for
- Los Lineamientos aplican en general para cualquier proyecto.

# Preferences
- Me gusta trabajar con functional components en react.
- Los estilos los mantendremos en sus respectivos archivos y solo en casos necesarios o donde aplique usaremos StyleComponents o lo que sea necesario.