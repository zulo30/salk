export default vertexShader = `
varying vec2 vertexUV;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);
}
`