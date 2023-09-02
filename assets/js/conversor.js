                    function convertirMoneda() {
                        const cantidad = parseFloat(document.getElementById('cantidad').value);
                        const desdeMoneda = document.getElementById('desde').value;
                        const haciaMoneda = document.getElementById('to').value;
                        const tasaConversion = getTasaConversion(desdeMoneda, haciaMoneda);
                        
                        if (isNaN(cantidad)) {
                            alert('Por favor, ingrese una cantidad válida.');
                            return;
                        }
                        
                        const cantidadConvertida = cantidad * tasaConversion;
                        document.getElementById('result').textContent = `${cantidad} ${desdeMoneda} = ${cantidadConvertida.toFixed(2)} ${haciaMoneda}`;
                    }
                    
                    function getTasaConversion(desdeMoneda, haciaMoneda) {
                        const rates = {
                            USD: {
                                EUR: 0.93,
                                ARS: 349.26,
                            },
                            EUR: {
                                USD: 1.08,
                                ARS: 377.12,
                            },
                            ARS: {
                                USD: 0.0029,
                                EUR: 0.0027,
                            },
                        };
                        
                        return rates[desdeMoneda][haciaMoneda];
                    }