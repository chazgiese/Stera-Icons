import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextBRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 2.25h.75v19.5H6a.75.75 0 0 1-.75-.75V3c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M12.5 2.25a5.25 5.25 0 0 1 3.45 9.2 5.25 5.25 0 0 1-1.45 10.3H6.75v-1.5h7.75a3.75 3.75 0 1 0 0-7.5H6.75v-1.5h5.75a3.75 3.75 0 1 0 0-7.5H6.75v-1.5z" />
    </IconBase>
  ))
);

TextBRegularDuotone.displayName = 'TextBRegularDuotone';

export { TextBRegularDuotone };
export type { TextBRegularDuotoneProps };
