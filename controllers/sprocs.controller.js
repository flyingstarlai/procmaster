import connections from '../models/connections.model';
import logger from '../core/logger/app-logger';
import initMysql from '../db/mysql.connect';

export const MYSQL = 'MYSQL';
export const ORACLE = 'ORACLE';

const controller = {};

controller.execProc = async (req, res) => {
  let procedure = {};
  let query = '';
  let config = {};
  try {
    const connectionRepo = await connections.getConnectionByProcedure(req.params.spId);
    const { procedures, ...configProp } = connectionRepo.toObject();
    config = configProp;
    procedure = procedures.pop();
    procedure.parameters.map((param) => {
      const value = req.body[param.name];
      query = query.concat(`'${value}',`);
    });
    query = `CALL ${procedure.name}(${query.substring(0, query.length - 1)})`;
    logger.info(query);
  } catch (error) {
    logger.error(error);
  }

  if (config.profile === MYSQL) {
    initMysql(config)(async (conn) => {
      const [rows, fields] = await conn.execute(query);
      res.json(rows[0]);
    });
  }

	// if (config.profile === ORACLE) {
	// 	initOracle(config)(async (conn) => {

	// 	})
	// }
};
export default controller;

// export default ({ conn }) => async (req, res) => {
//   const { sprocedures.params;
//   logger.info(req.body);
//   try {
//     const procRepo = await procedures.getProcedure(spId);
//     let query = '';
//     procRepo.parameters.map((param) => {
//       const value = req.body[param.name];
//       query = query.concat(`'${value}',`);
//     });
//     query = `CALL ${procRepo.name}(${query.substring(0, query.length - 1)})`;
//     logger.info(query);
//     const [rows, fields] = await conn.execute(query);
//     res.json(rows[0]);
//     console.log(rows);
//   } catch (error) {
//     res.json(error);
//     console.log(error);
//   }
// };
