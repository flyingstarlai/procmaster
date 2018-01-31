import procedure from '../models/procedure.model';
import logger from '../core/logger/app-logger';

export default ({ conn }) => async (req, res) => {
  const { spId } = req.params;
  logger.info(req.body);
  try {
    const procRepo = await procedure.getProcedure(spId);
    let query = '';
    procRepo.parameters.map((param) => {
      const value = req.body[param.name];
      query = query.concat(`'${value}',`);
    });
    query = `CALL ${procRepo.name}(${query.substring(0, query.length - 1)})`;
    logger.info(query);
    const [rows, fields] = await conn.execute(query);
    res.json(rows[0]);
    console.log(rows);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
