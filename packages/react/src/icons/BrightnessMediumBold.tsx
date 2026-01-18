import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrightnessMediumBoldProps = Omit<IconBaseProps, 'children'>;

const BrightnessMediumBold = memo(
  forwardRef<SVGSVGElement, BrightnessMediumBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18.5a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-1.5a1 1 0 0 1 1-1M6 16.6A1 1 0 0 1 7.4 18l-1.06 1.07a1 1 0 0 1-1.4-1.42zM16.6 16.6a1 1 0 0 1 1.42 0l1.06 1.05a1 1 0 0 1-1.41 1.42L16.6 18a1 1 0 0 1 0-1.42" />
        <path fill="currentColor" fillRule="evenodd" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
        <path fill="currentColor" d="M4.5 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 0 1 0 2h-1.5a1 1 0 0 1 0-2zM17.66 4.93a1 1 0 0 1 1.41 1.41L18.01 7.4a1 1 0 0 1-1.41-1.41zM4.94 4.92a1 1 0 0 1 1.41 0L7.41 6A1 1 0 0 1 6 7.39L4.94 6.35a1 1 0 0 1 0-1.42M12 2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

BrightnessMediumBold.displayName = 'BrightnessMediumBold';

export { BrightnessMediumBold };
export type { BrightnessMediumBoldProps };
