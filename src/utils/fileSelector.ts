export  function selectFiles(
    accept: string = '*',
    multiple: boolean = false
): Promise<FileList | null> {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = accept;
        input.multiple = multiple;
        input.onchange = () => {
            if (input.files) {
                resolve(input.files);
            } else {
                reject(null);
            }
        };
        input.click();
    });
}