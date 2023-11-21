import React from "react";
import Helmet from "react-helmet";
import favicon from "../assets/images/favicon.ico";
import HeroImage from "../components/shared/HeroImage";
import ProcessModel from "../components/Learn/ProcessModel";
import Explore from "../components/Learn/Explore";
import Partnerships from "../components/Learn/Partnerships";
import { ArrowDownward } from "@material-ui/icons";
import { Box, Button, Container, Hidden, Typography } from "@material-ui/core";
import Logo from "../components/shared/Logo";

const scrollTo = React.createRef();
const scrollDown = () => {
  scrollTo.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Learn = () => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>Open Practice Library</title>
      <meta
        name="description"
        content="Practices that empower teams to collaborate and deliver iteratively"
      />
      <meta property="og:site_name" content="Open Practice Library" />
      <meta
        property="og:image"
        content="https://openpracticelibrary.github.io/opl-media/images/opl-logo.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <Box display="flex" flexDirection="column">
      <Box position="absolute" top="2rem" left="2rem" color="common.white">
        <Hidden xsDown implementation="js">
          <Logo color="common.white" />
        </Hidden>
        <Hidden smUp implementation="js">
          <Logo color="common.white" small horizontal />
        </Hidden>
      </Box>
      <HeroImage opacity={0.6}>
        <Box mx={8} color="common.white" textAlign="center" width="100%">
          <Typography color="inherit" variant="h3" gutterBottom>
          バズワードを乗り越え、真のビジネス価値を迅速に提供する。
          </Typography>
          <Box marginBottom={6}>
            <Typography component="p" gutterBottom variant="h6">
            オープン・プラクティス・ライブラリーは、ベスト・プラクティスやツールを集めた、コミュニティ主導のオープンソース・ライブラリです。
            </Typography>
            <Typography component="p" variant="h6">
            これは、個人、チーム、そしてビジネス全体が、最高の結果のための最適な方法を見つける助けになるでしょう。
            </Typography>
          </Box>
          <Box mx="auto">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ArrowDownward />}
              onClick={scrollDown}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </HeroImage>
      <Container maxWidth="md" alignSelf="center" mx={6}>
        <div ref={scrollTo} />
        <Box my={6}>
          <Typography variant="h5" gutterBottom>
          様々な役割ごとに様々な課題や取り組みがあります。オープン・プラクティス・ライブラリーは、そのすべての人々を助けることができます。
          </Typography>
          <Typography gutterBottom>
            - 正しいものを正しい方法で作成する必要があるプロダクト・オーナー。
          </Typography>
          <Typography gutterBottom>
            - メトリクスに基づくビジネス成果に向けてのロードマップを必要とするステークホルダー。
          </Typography>
          <Typography gutterBottom>
            - 全員が同じ目標に向かって意見を出し合い、足並みを揃えることを望むチームのリーダー。
          </Typography>
          <Box marginTop={2}>
            <Typography component="p" variant="body1">
            これらのプラクティスは、日々実践している人々によって作成され、テストされ、共有されています。プラクティスは、より良い経験を生み出すための新しいアイデアを求めている人々のためのものです。そして、大小を問わず、課題を解決するための革新的で実績のある方法を見つけたいすべての人のためのものです。
            </Typography>
          </Box>
        </Box>
        <ProcessModel />
        <Partnerships />
      </Container>
      <Explore />
    </Box>
  </>
);

export default Learn;
