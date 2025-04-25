import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../pages/Search';

describe('검색엔진 테스트', () => {
  beforeAll(() => {
    // window.alert를 모의 함수로 설정
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  beforeEach(() => {
    render(<Search />);
  });

  test('검색어가 없다면 에러 경고가 발생한다', () => {
    // given
    const searchInput = screen.getByPlaceholderText('Search...');

    // when - 빈 검색어를 입력한다
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.submit(searchInput);

    // then - 에러 경고가 발생한다
    expect(window.alert).toHaveBeenCalledWith('검색어를 입력해주세요.');
  });

  test('fe를 입력하면 추천 검색어가 나온다', async () => {
    // given
    const searchInput = screen.getByPlaceholderText('Search...');

    // when - 검색어를 입력한다
    fireEvent.change(searchInput, { target: { value: 'fe' } });
    fireEvent.submit(searchInput);

    // then - 추천 검색어가 나온다
    expect(await screen.findByText('frontend development')).toBeInTheDocument();
    expect(await screen.findByText('fe framework')).toBeInTheDocument();
    expect(await screen.findByText('fe interview questions')).toBeInTheDocument();
  });

  test('검색어를 입력하고 검색 버튼을 클릭하면 최근 검색어가 업데이트된다', () => {
    // given
    const searchInput = screen.getByPlaceholderText('Search...');

    // when - 검색어를 입력하고 검색 버튼을 클릭한다
    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.submit(searchInput);

    // then - 최근 검색어가 업데이트된다
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
