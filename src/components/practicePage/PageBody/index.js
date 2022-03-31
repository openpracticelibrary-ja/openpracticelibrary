import React from "react";
import FullText from "./FullText";
import MediaGallery from "./MediaGallery";
import Resources from "./Resources";
import { Box, Typography } from "@material-ui/core";
import HyvorTalk from "hyvor-talk-react";

const PageBody = ({
  body: { whatIs, whyDo, howTo },
  discussRef,
  fullText,
  howToRef,
  mediaGallery,
  mediaRef,
  practiceId,
  resourceRef,
  resources,
  title,
  whatIsRef,
  whyDoRef,
}) => {
  if (whatIs || whyDo || howTo) {
    return (
      <Box>
        {whatIs && (
          <>
            <Typography gutterBottom variant="h4" ref={whatIsRef}>
              概要
            </Typography>
            <FullText source={whatIs} />
          </>
        )}
        {whyDo && (
          <>
            <Typography gutterBottom ref={whyDoRef} variant="h4">
              メリット
            </Typography>
            <FullText source={whyDo} />
          </>
        )}
        {howTo && (
          <>
            <Typography gutterBottom ref={howToRef} variant="h4">
              実施方法
            </Typography>
            <FullText source={howTo} />
          </>
        )}
        {mediaGallery && (
          <>
            <Typography gutterBottom ref={mediaRef} variant="h4">
              実施例
            </Typography>
            <MediaGallery
              practiceId={practiceId}
              title={title}
              mediaGallery={mediaGallery}
              mediaRef={mediaRef}
            />
          </>
        )}

        {resources && (
          <>
            <Typography gutterBottom variant="h4" ref={resourceRef}>
              参考
            </Typography>
            <Resources
              practiceTitle={title}
              practiceId={practiceId}
              links={resources}
              resourceRef={resourceRef}
            />
          </>
        )}
        <Typography ref={discussRef} variant="h4">
          コメント
        </Typography>
        <HyvorTalk.Embed websiteId={1961} />
      </Box>
    );
  } else {
    return <FullText source={fullText} />;
  }
};
export default PageBody;
