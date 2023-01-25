import React from "react";
import styled from "styled-components";

const MoodCategory = () => {
    const categoryKeword = [
        {
            id: 1,
            keyword: "공부",
        },
        {
            id: 2,
            keyword: "수면",
        },
        {
            id: 3,
            keyword: "감성",
        },
        {
            id: 4,
            keyword: "드라이브",
        },
        {
            id: 5,
            keyword: "노동요",
        },
        {
            id: 6,
            keyword: "운동",
        },
        {
            id: 7,
            keyword: "기분전환",
        },
    ];

    // 미완성. 수정예정
    const categoryChoice = () => {
        alert('test')
    };

    return (
        <Background>
            <MoodCategoryForm>
                <MoodCategoryWrap>
                    {categoryKeword.map((li) => {
                        return (
                            <CategoryList key={li.id}>
                                <CategoryListBtn
                                    type='button'
                                    onClick={categoryChoice}
                                >
                                    {li.keyword}
                                </CategoryListBtn>
                            </CategoryList>
                        );
                    })}

                    {/* <CategoryList>
                        <CategoryListBtn type='button'>공부</CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>수면</CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>감성</CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>
                            드라이브
                        </CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>노동요</CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>운동</CategoryListBtn>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListBtn type='button'>
                            기분전환
                        </CategoryListBtn>
                    </CategoryList> */}
                </MoodCategoryWrap>
                <MoodPlayDiv>
                    <MoodPlayBtn type='submit'>Mood Play</MoodPlayBtn>
                </MoodPlayDiv>
            </MoodCategoryForm>
        </Background>
    );
};

export default MoodCategory;

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MoodCategoryForm = styled.form`
    width: 900px;
    margin-top: 80px;
    color: white;
`;

const MoodCategoryWrap = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`;

const CategoryList = styled.li`
    list-style: none;
`;

const CategoryListBtn = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    width: 160px;
    background-color: #2a2a2a;
    color: white;
    font-size: 18px;
    text-align: center;
    padding: 25px 20px;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
        border: 2px #ffb52b solid;
        transform: translateY(3px);
    }

    &:active {
        background-color: #ffb52b;
    }
`;

const MoodPlayDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoodPlayBtn = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    width: 160px;
    background-color: #ffb52b;
    color: white;
    padding: 25px 20px;
    margin-top: 70px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
        transform: translateY(3px);
    }
`;
