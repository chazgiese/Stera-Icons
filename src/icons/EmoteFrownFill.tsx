import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteFrownFillProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFill = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 12.5a6 6 0 0 0-4.8 2.4 1 1 0 0 0 1.6 1.2 4 4 0 0 1 6.4 0 1 1 0 0 0 1.6-1.2 6 6 0 0 0-4.8-2.4M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteFrownFill.displayName = 'EmoteFrownFill';

// Triple export pattern (lucide-react style)
export { EmoteFrownFill, EmoteFrownFill as EmoteFrownFillIcon, EmoteFrownFill as SiEmoteFrownFill };
export type { EmoteFrownFillProps };
