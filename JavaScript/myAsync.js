function myAsync(genFn) {
    let gen = genFn;
    return new Promise(function (resolve, reject) {
        function step(nextFn) {
            let next;
            try {
                next = nextFn();
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then(
                function (v) {
                    step(function () {
                        return gen.next(v);
                    });
                },
                function (e) {
                    step(function () {
                        return gen.throw(e);
                    });
                }
            );
        }
        step(function () {
            return gen.next();
        });
    })
}

module.exports = myAsync