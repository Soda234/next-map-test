/*global kakao*/

import Script from "next/script";
import * as stores from "@/data/store_data.json";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const DEFAULT_LATLNG = {
    lat: 37.497625203,
    lng: 127.03088379,
  };

  const loadKakaoMap = () => {
    // kakao map 로드
    window.kakao.maps.load(() => {
      var mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var mapOptions = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(
          DEFAULT_LATLNG.lat,
          DEFAULT_LATLNG.lng
        ), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOptions);

      //상점들 데이터

      stores?.["DATA"].map((item) => {
        // 마커가 표시될 위치입니다
        var markerPosition = new window.kakao.maps.LatLng(
          item.y_dnts,
          item.x_cnts
        );

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    });
  };

  return (
    <>
      <div id="map" className="w-full h-screen">
        <Script
          onReady={loadKakaoMap}
          strategy="afterInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        />
      </div>
    </>
  );
};

export default Map;
