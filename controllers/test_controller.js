import { testModel } from '../models/test_model.js';

export const testController = async (req, res, next) => {
  try {
    const resData = await testModel(req);

    res.status(200).json({
      statusCode: 200,
      data: resData,
    });
  } catch (error) {
    console.error('[testController] Error:', error);

    res.status(500).json({
      statusCode: 500,
      error: error.message || error.toString(),
    });
  }
};
