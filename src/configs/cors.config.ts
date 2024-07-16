const whiteList = ["http://dobeeteam.local:8000"];

const corsOptions = {
  origin: whiteList,
  optionsSuccessStatus: 200,
};

export default corsOptions;
