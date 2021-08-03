import React from "react";
import { View, StyleSheet } from 'react-native';

/**
 * 하단 페이지네이션 컴포넌트
 * @author 주민지
 */

export default function Pagination ({ postsPerPage, totalPosts, paginate }) {
  //괄호 안 중괄호는 매개변수
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //Math.ceil() 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 수를 integer로 반환
    //리스트 하단 숫자들이 몇개가 표시될지 정해줌, 게시물이 늘어날 수록 늘어남
    pageNumbers.push(i);
  }

  return (
      <View >
        {pageNumbers.map((number) => (
          <View key={number}>
            <View onClick={() => paginate(number)} >
              {/* <a> 태그의 href 속성은 링크된 페이지의 URL을 명시합니다.*/}
              {number}
            </View>
          </View>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize:20,
    borderRadius:5,
    width:40,
  },
});
