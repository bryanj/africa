var country_map = {
  "KR": {"name": "대한민국", "flag": "🇰🇷", "timezone": 9},
  "ET": {"name": "에티오피아", "flag": "🇪🇹", "timezone": 3},
  "TZ": {"name": "탄자니아", "flag": "🇹🇿", "timezone": 3},
  "KE": {"name": "케냐", "flag": "🇰🇪", "timezone": 3},
  "ZA": {"name": "남아프리카공화국", "flag": "🇿🇦", "timezone": 2}
};
var list = [
  {"from": "2018-08-26 00:00+0900", "to": "2018-08-27 21:00+0900", "country": "KR", "description": "설레는 마음으로 여행 준비를 하고 있습니다", "background": "default"},
  {"from": "2018-08-27 21:00+0900", "to": "2018-08-28 01:05+0900", "country": "KR", "description": "아프리카로 떠나는 비행기를 기다리고 있습니다", "background": "icn"},
  {"from": "2018-08-28 01:05+0900", "to": "2018-08-28 07:10+0300", "country": "KR", "description": "아디스아바바로 향하는 비행기를 타고 있습니다", "background": "ethiopian"},
  {"from": "2018-08-28 07:10+0300", "to": "2018-08-28 09:15+0300", "country": "ET", "description": "탄자니아로 떠나는 비행기를 기다리고 있습니다", "background": "add"},
  {"from": "2018-08-28 09:15+0300", "to": "2018-08-28 12:05+0300", "country": "ET", "description": "다르에스살람으로 향하는 비행기를 타고 있습니다", "background": "ethiopian"},
  {"from": "2018-08-28 12:05+0300", "to": "2018-08-28 16:45+0300", "country": "TZ", "description": "잔지바르로 향하는 비행기를 기다리고 있습니다", "background": "dar"},
  {"from": "2018-08-28 16:45+0300", "to": "2018-08-28 17:10+0300", "country": "TZ", "description": "잔지바르로 향하는 비행기를 타고 있습니다", "background": "flight2"},
  {"from": "2018-08-28 17:10+0300", "to": "2018-09-02 12:00+0300", "country": "TZ", "description": "잔지바르의 에메랄드빛 해변을 즐기고 있습니다", "background": "zanzibar"},
  {"from": "2018-09-02 12:00+0300", "to": "2018-09-02 14:30+0300", "country": "TZ", "description": "다르에스살람으로 향하는 비행기를 기다리고 있습니다", "background": "znz"},
  {"from": "2018-09-02 14:30+0300", "to": "2018-09-02 14:55+0300", "country": "TZ", "description": "다르에스살람으로 향하는 비행기를 타고 있습니다", "background": "flight2"},
  {"from": "2018-09-02 14:55+0300", "to": "2018-09-02 17:30+0300", "country": "TZ", "description": "케냐로 향하는 비행기를 기다리고 있습니다", "background": "dar"},
  {"from": "2018-09-02 17:30+0300", "to": "2018-09-02 18:50+0300", "country": "TZ", "description": "나이로비로 향하는 비행기를 타고 있습니다", "background": "kenya"},
  {"from": "2018-09-02 18:50+0300", "to": "2018-09-03 09:00+0300", "country": "KE", "description": "마사이마라 사파리를 기대하며 쉬고 있습니다", "background": "nairobi"},
  {"from": "2018-09-03 09:00+0300", "to": "2018-09-05 21:00+0300", "country": "KE", "description": "마사이마라의 동물들과 아이컨택 중입니다", "background": "masaimara"},
  {"from": "2018-09-05 21:00+0300", "to": "2018-09-06 09:00+0300", "country": "KE", "description": "내일을 기대하며 숙소에서 쉬고 있습니다", "background": "nairobi"},
  {"from": "2018-09-06 09:00+0300", "to": "2018-09-07 21:00+0300", "country": "KE", "description": "나쿠루 호수와 나이바샤 호수, 헬스 게이트를 돌아다니고 있습니다", "background": "naivasha"},
  {"from": "2018-09-07 21:00+0300", "to": "2018-09-08 09:00+0300", "country": "KE", "description": "내일을 기대하며 숙소에서 쉬고 있습니다", "background": "nairobi"},
  {"from": "2018-09-08 09:00+0300", "to": "2018-09-08 21:00+0300", "country": "KE", "description": "나이로비 시내를 돌아다니며 도토와도 만나는 중입니다", "background": "elephant"},
  {"from": "2018-09-08 21:00+0300", "to": "2018-09-09 12:00+0300", "country": "KE", "description": "케이프타운으로 이동할 준비를 하고 있습니다", "background": "nairobi"},
  {"from": "2018-09-09 12:00+0300", "to": "2018-09-09 15:30+0300", "country": "KE", "description": "케이프타운으로 향하는 비행기를 기다리고 있습니다", "background": "nbo"},
  {"from": "2018-09-09 15:30+0300", "to": "2018-09-09 20:15+0200", "country": "KE", "description": "케이프타운으로 향하는 비행기를 타고 있습니다", "background": "kenya"},
  {"from": "2018-09-09 20:15+0200", "to": "2018-09-10 09:00+0200", "country": "ZA", "description": "내일을 기대하며 숙소에서 쉬고 있습니다", "background": "capetown"}
];
