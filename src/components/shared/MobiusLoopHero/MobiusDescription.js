import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
const MobiusDescription = () => (
  <Box>
    <Box marginBottom={2}>
      <Typography align="center" variant="h5" component="h3" gutterBottom>
        The Mobius Loop
      </Typography>
      <Divider />
    </Box>
    <Typography gutterBottom variant="body2">
      高速なデジタルプロダクト開発のための繰り返し開発モデル
    </Typography>
    <Typography gutterBottom variant="body2">
      Open Practice Library はこのモデルを中心に構成されています。
    </Typography>
    <Typography variant="body2">
      各ボタンは対応するプラクティスを表示します。
    </Typography>
  </Box>
);
export default MobiusDescription;
