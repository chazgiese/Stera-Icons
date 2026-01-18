import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PushPinFillProps = Omit<IconBaseProps, 'children'>;

const PushPinFill = memo(
  forwardRef<SVGSVGElement, PushPinFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.97 2.26a1.99 1.99 0 0 1 .68 3.75l-.62.32a.5.5 0 0 0-.28.44v3.56q0 .26.22.42L18.86 12a2 2 0 0 1 .89 1.67v1.08a2 2 0 0 1-2 2H13V22a1 1 0 1 1-2 0v-5.25H6.25a2 2 0 0 1-2-2v-1.08a2 2 0 0 1 .9-1.67l1.88-1.25a.5.5 0 0 0 .22-.42V6.77a.5.5 0 0 0-.28-.44L6.35 6a1.99 1.99 0 0 1 .89-3.76h9.52z" />
    </IconBase>
  ))
);

PushPinFill.displayName = 'PushPinFill';

export { PushPinFill };
export type { PushPinFillProps };
