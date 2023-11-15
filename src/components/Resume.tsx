import React from "react";
import styled, { css } from "styled-components/macro";

import Carousel from "./Carousel.js";
import TechStack from "./TechStack.tsx";
import ChopsticksConsumerGif from "../images/chopsticks-consumer.gif";

const Resume = () => {
  return (
    <div>
      <Section>
        <div className="desc">
          <h1>레벨나인 옵티컬미 포텐셜미</h1>
          <p>
            피크닉의 전시 `회사만들기`에 참여한 레벨나인의 프로젝트 `옵티컬미
            포텐셜미`를 개발했습니다.
            <br />
            <br />
            QR코드로 접근해 단계별로 질문에 답하고 답변 정보가 포함된 바코드를
            출력합니다. 이후 사용자는 해당 바코드를 인식시켜 자신에게 어울리는
            유형을 확인할 수 있습니다.
            <br />
            <br />
            <a href="https://opticalmepotentialme.com/">여기</a>에서 운영중인
            서비스를 확인할 수 있습니다.
          </p>
        </div>

        <Image src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/piknic-opticalme.jpeg" />
      </Section>

      <Section>
        <div className="desc">
          <h1>앤어플랜트 이모션디코더</h1>
          <p>
            레벨나인의 구성원으로서 클라이언트 앤어플랜트의 이모션디코더
            프로젝트를 개발했습니다.
            <br />
            <br />
            일반적인 스크롤 방식과는 달리 유저의 스크롤을 인식해 마치 장면이
            넘어가듯 보여지는 페이지 트랜지션을 구현했습니다.
            <br />
            <br />
            <a href="https://www.decoding-my-emotion.com/">여기</a>에서 운영중인
            서비스를 확인할 수 있습니다.
          </p>
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB%E1%84%83%E1%85%B5%E1%84%8F%E1%85%A9%E1%84%83%E1%85%A5-%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9-%E1%84%87%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A9.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>저스틴 블로그</h1>
          <p>
            주로 기술 경험을 기록하기 위한 목적의 개인 블로그입니다.
            <br />
            <br />
            원활한 에디팅 경험을 위해 Markdown 문법 미리보기, 드래그-드랍으로
            이미지 업로드, 코드 신택스 하이라이팅, 코드 수정 시 들여쓰기 수준
            맞춤 등의 기능을 직접 개발해 사용중입니다.
            <br />
            <br />
            <a href="https://justindglee.com">여기</a>에서 운영중인 서비스를
            확인할 수 있습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "Gatsby",
                icon: "gatsbyjs",
              },
              {
                name: "Strapi",
                icon: "strapi",
              },
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "Recoil",
                icon: "recoil",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
            ]}
          />
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/blog-intro.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>찹스틱스 소비자 플랫폼</h1>
          <p>
            찹스틱스의 소비자 플랫폼을 개발하였습니다. 찹스틱스 판매자 플랫폼을
            통해 등록된 상품의 내용을 확인, 카트에 담고 주문할 수 있습니다.
            <br />
            <br />
            상품 선택 및 카트, 주문상태 구현을 위한 데이터 구조 설계와 결제 모듈
            연동, 회원가입 및 내 정보 관리 기능을 개발을 담당했습니다.
            <br />
            <br />
            <a href="https://chopsticks.market">여기</a>에서 운영중인 서비스를
            확인할 수 있습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "Next.js",
                icon: "nextjs",
              },
              {
                name: "Recoil",
                icon: "recoil",
              },
              {
                name: "React Query",
                icon: "reactquery",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
              {
                name: "아임포트(포트원)",
                icon: "portone",
              },
            ]}
          />
        </div>

        <Image alt="chopsticks-consumer" src={ChopsticksConsumerGif} />
      </Section>

      <Section>
        <div className="desc">
          <h1>찹스틱스 판매자 플랫폼</h1>
          <p>
            찹스틱스의 판매자 플랫폼을 개발하였습니다. 판매자로 승인된 샵의
            정보를 등록하고, 해당 샵의 상품들을 등록할 수 있습니다.
            <br />
            <br />
            상품에는 필수와 선택 옵션을 추가하고 가격과 재고를 입력 및 수정할 수
            있으며 이외 조건부 무료배송 조건 등의 상품 관련 정보 등록 및 수정에
            필요한 데이터 구조 설계 및 기능 구현을 담당했습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "Apollo Client",
                icon: "apollo",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
              {
                name: "React hook form",
                icon: "hookform",
              },
            ]}
          />
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/chopsticks-seller.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>바닐라코딩 포털 서비스</h1>
          <p>
            바닐라코딩 포털 서비스를 기획, 디자인 및 개발하였습니다. 코스
            신청서를 작성, 결제하고 코스 컨텐츠를 확인할 수 있습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "Figma",
                icon: "typescript",
              },
              {
                name: "Next.js",
                icon: "nextjs",
              },
              {
                name: "아임포트(포트원)",
                icon: "portone",
              },
            ]}
          />
        </div>
        <Carousel
          images={[
            {
              alt: "portal1",
              src: "/portal-1.png",
            },
            // {
            //   alt: "portal2",
            //   src: "/portal-2.gif",
            // },
          ]}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>바닐라코딩 앱</h1>
          <p>
            퍼즐앱을 개발하였습니다. 자료구조 개념을 사용하여 알파벳 순서를
            맞추는 게임을 할 수 있습니다.
            <br />
            <br />
            <a href="https://play.google.com/store/apps/details?id=com.crowd.wordie&pli=1">
              여기
            </a>
            에서 플레이스토어에 배포된 앱을 확인할 수 있습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "React Native",
                icon: "react",
              },
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
            ]}
          />
        </div>

        {/* <Carousel
          images={[
            {
              alt: "rn1",
              src: "/rn-1.png",
            },
            {
              alt: "rn2",
              src: "/rn-2.png",
            },
          ]}
        /> */}

        <Image
          alt="rn1"
          src="/rn-1.png"
          style={{
            objectFit: "contain",
          }}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>복주머니 모바일 웹</h1>
          <p>
            설날에 사용될 수 있는 복주머니 모바일 웹을 개발했습니다. 복주머니에
            메시지를 담아 상대방의 방에 두고 올 수 있습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "React",
                icon: "react",
              },
              {
                name: "React Router",
                icon: "reactrouter",
              },
            ]}
          />
        </div>
        <Image
          alt="bok1"
          src="/bok-1.png"
          style={{
            objectFit: "contain",
          }}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>피크닉 정원 만들기 전시</h1>
          <p>
            키오스크 전시공간 피크닉의 전시 `정원 만들기`에 사용될 키오스크를
            개발하였습니다.
            <br />
            <br />
            마우스 드래그 앤 드롭으로 정원 설계도를 이동하고 확대 및 축소하며
            설계도를 탐색할 수 있습니다. 설계도에 표기된 구역을 클릭하면 각각의
            자세한 식재 정보를 확인할 수 있습니다.
            <br />
            <br />
            <a href="https://piknic-piet-oudolf.netlify.app/">여기</a>에서
            배포된 내용을 확인할 수 있습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "JavaScript",
                icon: "javascript",
              },
              {
                name: "Netlify",
                icon: "netlify",
              },
            ]}
          />
        </div>
        <Image alt="piet1" src="/piet-1.gif" />
      </Section>

      <Section>
        <div className="desc">
          <h1>피크닉 사울레이터 전시</h1>
          <p>
            전시공간 피크닉의 전시 `창문을 통해 어렴풋이`에 전시된 이미지
            슬라이더를 개발하였습니다.
            <br />
            <br />
            프록시서버에서 인스타그램 링크를 이미지로 가져와 슬라이더로
            표현합니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "JavaScript",
                icon: "javascript",
              },
              {
                name: "Node.js",
                icon: "nodejs",
              },
              {
                name: "Heroku",
                icon: "heroku",
              },
            ]}
          />
        </div>

        <Image alt="saul1" src="/saul-1.gif" />
      </Section>
    </div>
  );
};

const Section = styled.div`
  border-top: 1px solid gainsboro;

  &:last-child {
    border-bottom: 1px solid gainsboro;
  }

  h1 {
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    margin-left: 0.8em;
    margin-bottom: 0.5em;
  }

  p {
    padding-right: 2em;
    word-break: keep-all;
  }

  padding: 2em 0;

  @media only screen and (max-width: 480px) {
    height: 100svh;
    margin-top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    scroll-snap-align: start;

    img,
    video {
      max-height: 40svh;
    }

    h1 {
      margin-top: -20px;
      font-size: min(3vh, 5vw) !important;
    }

    p {
      font-size: min(2.5vh, 4vw);
    }

    &:first-child {
      scroll-snap-align: unset;
      height: calc(100svh - 81.19px) !important;

      h1 {
        margin-top: -20px;
      }

      @media only screen and (max-height: 620px) {
        scroll-snap-align: center;
        height: 100svh !important;

        h1 {
          margin-top: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 481px) {
    display: flex;

    .desc {
      flex: 1;
      padding-left: 1em;

      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.4em;

      margin-bottom: 1.2em;
      margin-left: 0;
      text-align: left;
    }

    p {
      padding-right: 0;
    }

    .desc {
      text-align: left;
    }

    padding: 0;
  }
`;

const mediaStyle = css`
  background-color: black;

  flex: 1;
  width: 300px;
  height: 260px;

  @media only screen and (max-width: 480px) {
    margin-top: 16px;
    width: 100%;
  }
`;

const Image = styled.img`
  ${mediaStyle}
`;

const Video = styled.video<{ objectFit: string }>`
  ${mediaStyle}
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : "cover")};
`;

export default Resume;
