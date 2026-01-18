import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type OptionKeyBoldProps = Omit<IconBaseProps, 'children'>;

const OptionKeyBold = memo(
  forwardRef<SVGSVGElement, OptionKeyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.15 4.01a1 1 0 0 1 .77.6L15.66 18H21a1 1 0 1 1 0 2h-6a1 1 0 0 1-.92-.6L8.34 6H3a1 1 0 0 1 0-2h6zM21 4a1 1 0 0 1 0 2h-6.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

OptionKeyBold.displayName = 'OptionKeyBold';

export { OptionKeyBold };
export type { OptionKeyBoldProps };
