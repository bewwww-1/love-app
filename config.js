// ค่าเหล่านี้ใส่ได้ในโค้ดฝั่งเว็บ (anon key ออกแบบมาให้เปิดเผยได้) ห้ามใส่ service_role key
window.DUO_CONFIG = {
  SUPABASE_URL: "https://evfbfbkhcrfesnpgbhor.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_eeYI6wp1IrgFJvMkiBClLA_48DEmab-",
  // เพิ่ม TURN เพื่อให้โทรติดทุกเครือข่าย เช่น {urls:"turn:...", username:"...", credential:"..."}
 GOOGLE_MAPS_KEY: "", // ไม่บังคับ: ถ้าว่างจะใช้แผนที่แบบเดิม
  VAPID_PUBLIC: "BFNyzEt9i1NnfvczMXD9Sbj4WyuZGdY_VarZeT4cWUOHbC2tB7FCsU4vDUPnfNZDEex3oOBmMaUrtnoRtDsBeSA", // ใส่ Public key จาก
  ICE: [{ urls: "stun:stun.l.google.com:19302" }]
};
