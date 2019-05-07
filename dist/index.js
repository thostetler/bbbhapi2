"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi = require("@hapi/hapi");
const server = new hapi.Server({
    host: 'localhost',
    port: 8000
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {
        return 'ldskjf';
    }
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield server.start();
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
        console.log('Server is running at: ', server.info.uri);
    });
}
start();
//# sourceMappingURL=index.js.map