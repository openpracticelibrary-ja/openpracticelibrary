import React from "react";
import { Link } from "gatsby";
import { Box, Typography } from "@material-ui/core";
import MobiusLoopHero from "../shared/MobiusLoopHero";

const ProcessModel = () => {
  return (
    <Box data-testid="pageGrid" my={4}>
      <Typography
        gutterBottom
        variant="h4"
        color="primary"
        data-testid="processModel"
      >
        Our process model
      </Typography>

      <Box my={2}>
        <Typography gutterBottom>
          このライブラリのすべてのプラクティスは、{" "}
          <Link href="https://mobiusloop.com/" target="_blank" rel="noopener">
            Mobius Loop（メビウスループ）
          </Link>{" "}
          にマッピングすることができます。
          - オープンソースコミュニティによって生み出されたナビゲーターは、発見からデザイン、提供まで、イノベーションの継続的な流れを生み出します。
        </Typography>
        <Typography gutterBottom>
        プラクティスは、ループの4つの部分のいずれかにマッピングされます:
        </Typography>
        <Box my={4}>
          <MobiusLoopHero showContent={false} />
        </Box>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/foundation">Foundation</Link> - 基本的なレイヤーにおける文化的プラクティスや技術的プラクティスが、Mobius Loopの利用を加速させ、最大化することがわかりました。
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/discovery">Discovery</Link> - プラクティスによって、目標とする成果を明確にします。
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/options">Options</Link> - プラクティスによって、正しい結果への道筋を明らかにします。
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link href="/tags/delivery">Delivery</Link> - プラクティスは、あなたのアイデアをテストします。そして、何がうまくいき、何がうまくいかないかを学びます。
        </Typography>
      </Box>
    </Box>
  );
};

export default ProcessModel;
