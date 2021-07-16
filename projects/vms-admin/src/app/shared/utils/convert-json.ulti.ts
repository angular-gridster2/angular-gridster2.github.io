export class ConvertJson {
    /**
     * Example
     * Input: [{ color: '#000000', threshold: 24 }]
     * Output: { 24: { color: '#000000' }}
     * @param array
     * @param keyField
     */
    static arrayToObjectKey(array, keyField) {
        return array.reduce((obj, item) => {
            const demo = { ...item };
            delete demo[keyField];
            obj[item[keyField]] = demo;
            return obj;
        }, {});
    }
}
