import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSadFillProps = Omit<IconBaseProps, 'children'>;

const EmoteSadFill = memo(
  forwardRef<SVGSVGElement, EmoteSadFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-sad-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 12.5c-1.35 0-2.6.45-3.6 1.2a1 1 0 0 0 1.2 1.6 4 4 0 0 1 4.8 0 1 1 0 0 0 1.2-1.6c-1-.75-2.25-1.2-3.6-1.2M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteSadFill.displayName = 'EmoteSadFill';

// Triple export pattern (lucide-react style)
export { EmoteSadFill, EmoteSadFill as EmoteSadFillIcon, EmoteSadFill as SiEmoteSadFill };
export type { EmoteSadFillProps };
