export default fragmentShader = `
uniform sampler2D texture;

varying vec2 vertexUV; 

void main() {
  gl_FragColor =  texture2D(texture, vertexUV);
}
`