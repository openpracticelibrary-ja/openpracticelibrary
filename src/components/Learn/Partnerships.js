import React from "react";
import RedHatLogo from "../../assets/images/logo-red-hat-hat-color-rgb.png";
import MobiusLogo from "../../assets/images/mobius-small.png";
import CCHeartLogo from "../../assets/images/ccheart-black.png";
import { Box, Typography } from "@material-ui/core";
import PartnerLink from "./PartnerLink";

const Partnerships = () => (
  <Box data-testid="communityHeader">
    <Typography color="primary" variant="h4" gutterBottom>
      Partnerships
    </Typography>
    <Typography>
    優れたオープンソース・プロジェクトには、優れたコラボレーションが不可欠です。
    </Typography>
    <Box
      my={4}
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <PartnerLink
        altText="Red Hat Logo"
        caption="プロダクトチームの本拠地であり、最大のオープンソースコントリビューターでもあります。"
        imageSrc={RedHatLogo}
        title="Red Hat"
        url="https://www.redhat.com/en/services/consulting/open-innovation-labs"
      />
      <PartnerLink
        altText="Mobius Loop Logo"
        caption="私たちのプロセスモデルであり、プロダクトライフサイクルのプラクティスを定義するパートナーです。"
        imageSrc={MobiusLogo}
        title="Mobius Loop"
        url="https://mobiusloop.com"
      />
      <PartnerLink
        altText="Creative Commons Logo"
        caption="私たちのコンテンツは、アプリケーション・ソフトウェアと同様にオープンソースです。"
        imageSrc={CCHeartLogo}
        title="Creative Commons"
        url="https://creativecommons.org"
      />
    </Box>
  </Box>
);

export default Partnerships;
