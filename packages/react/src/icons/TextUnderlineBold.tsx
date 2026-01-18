import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextUnderlineBoldProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineBold = memo(
  forwardRef<SVGSVGElement, TextUnderlineBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 21a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM18 1a1 1 0 0 1 1 1v10a7 7 0 1 1-14 0V2a1 1 0 0 1 2 0v10a5 5 0 0 0 10 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

TextUnderlineBold.displayName = 'TextUnderlineBold';

export { TextUnderlineBold };
export type { TextUnderlineBoldProps };
