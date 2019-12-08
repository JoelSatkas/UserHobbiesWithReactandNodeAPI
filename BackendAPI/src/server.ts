import app from "./app";
const PORT = 3001;

export default app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
