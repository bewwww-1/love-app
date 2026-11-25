// ค่าเหล่านี้ใส่ได้ในโค้ดฝั่งเว็บ (anon key ออกแบบมาให้เปิดเผยได้) ห้ามใส่ service_role key
window.DUO_CONFIG = {
  SUPABASE_URL: ""https://evfbfbkhcrfesnpgbhor.supabase.co",
  SUPABASE_ANON_KEY: "evfbfbkhcrfesnpgbhor",
  // เพิ่ม TURN เพื่อให้โทรติดทุกเครือข่าย เช่น {urls:"turn:...", username:"...", credential:"..."}
  ICE: [{ urls: "stun:stun.l.google.com:19302" }]
};
