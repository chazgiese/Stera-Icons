import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilRulerFillProps = Omit<IconBaseProps, 'children'>;

const PencilRulerFill = memo(
  forwardRef<SVGSVGElement, PencilRulerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.5 20.75c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75V19.5h7zM18.75 2.5c.97 0 1.75.78 1.75 1.75v16.5c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75v-2.5h3a1 1 0 1 0 0-2h-3V13.5h3a1 1 0 1 0 0-2h-3V8.75h3a1 1 0 1 0 0-2h-3v-2.5c0-.97.78-1.75 1.75-1.75zM10.5 17.5h-7v-10h7zM7 1.5a.5.5 0 0 1 .38.17l3 3.5q.12.15.12.33h-7a.5.5 0 0 1 .12-.33l3-3.5A.5.5 0 0 1 7 1.5" />
    </IconBase>
  ))
);

PencilRulerFill.displayName = 'PencilRulerFill';

export { PencilRulerFill };
export type { PencilRulerFillProps };
