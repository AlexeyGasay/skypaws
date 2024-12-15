export function useFileDialog(
  callback,
  multiply = true,
  allowTypes = "image/png, image/jpeg",
) {
  const input = document.createElement("input");
  input.type = "file";

  input.multiple = multiply;
  input.accept = allowTypes;

  input.addEventListener("change", (event) => {
    const selectedFiles = event.target.files;
    callback(selectedFiles);
  });

  input.click();
}
