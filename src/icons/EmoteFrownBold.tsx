import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteFrownBoldProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownBold = memo(
  forwardRef<SVGSVGElement, EmoteFrownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown-bold" {...props}>
      <path fill="currentColor" d="M12 13.5a6 6 0 0 1 4.8 2.4 1 1 0 0 1-1.6 1.2 4 4 0 0 0-6.4 0 1 1 0 0 1-1.6-1.2 6 6 0 0 1 4.8-2.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownBold.displayName = 'EmoteFrownBold';

// Triple export pattern (lucide-react style)
export { EmoteFrownBold, EmoteFrownBold as EmoteFrownBoldIcon, EmoteFrownBold as SiEmoteFrownBold };
export type { EmoteFrownBoldProps };
