import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaperclipRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipRegularDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.5 1.25c2.35 0 4.25 1.9 4.25 4.25V15a2.75 2.75 0 1 1-5.5 0V8a.75.75 0 0 1 1.5 0v7a1.25 1.25 0 1 0 2.5 0V5.5a2.75 2.75 0 0 0-2.75-2.75z" opacity={.4} />
        <path fill="currentColor" d="M10.5 2.75A2.75 2.75 0 0 0 7.75 5.5V17a4.25 4.25 0 0 0 8.5 0V8a.75.75 0 0 1 1.5 0v9a5.75 5.75 0 0 1-11.5 0V5.5c0-2.35 1.9-4.25 4.25-4.25z" />
    </IconBase>
  ))
);

PaperclipRegularDuotone.displayName = 'PaperclipRegularDuotone';

export { PaperclipRegularDuotone };
export type { PaperclipRegularDuotoneProps };
