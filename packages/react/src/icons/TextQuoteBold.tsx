import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextQuoteBoldProps = Omit<IconBaseProps, 'children'>;

const TextQuoteBold = memo(
  forwardRef<SVGSVGElement, TextQuoteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 11a1 1 0 0 1 1 1v6.1a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1M21 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM16 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextQuoteBold.displayName = 'TextQuoteBold';

export { TextQuoteBold };
export type { TextQuoteBoldProps };
