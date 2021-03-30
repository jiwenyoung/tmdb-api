module.exports = (self) => {
    return (Data) =>{
        return async () => {
            try {
                const result = (await self.http.get(self.url)).data
                return Object.create(Data).init(result, self.type)
            } catch (error) {
                throw error;
            }
        }
    }
}