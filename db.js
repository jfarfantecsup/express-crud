conn = new Mongo();
db = conn.getDB("cruddb");

db.usuarios.insert(
  [
   {nombre: 'Jaime', apellido: 'Farfan', email: 'jfarfan@abc.com', estado:'A', created_at: new Date('01/23/2020')}
 ]);
