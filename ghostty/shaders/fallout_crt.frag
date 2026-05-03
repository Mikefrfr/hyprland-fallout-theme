// fallout_crt.frag
// Slight green tint and scanline effect
uniform float time;
vec4 hook_color(vec4 color, vec2 pos) {
    float scanline = sin(pos.y * 800.0) * 0.04;
    float flicker = 0.98 + 0.02 * sin(time * 60.0);
    color.rgb *= vec3(0.0, 1.0, 0.2);
    color.rgb += scanline;
    color.rgb *= flicker;
    return color;
}
