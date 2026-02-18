import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GridFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GridFillDuotone = memo(
  forwardRef<SVGSVGElement, GridFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="grid-fill-duotone" {...props}>
      <path d="M13.96 15.7v3.93h-3.92V15.7zM8.3 15.7v3.92q-.72 0-1.22-.04c-.57-.05-.9-.14-1.15-.26q-.82-.43-1.25-1.25a3 3 0 0 1-.26-1.15q-.04-.5-.04-1.21zM19.62 15.7q0 .72-.04 1.22c-.05.57-.14.9-.26 1.15q-.43.82-1.25 1.25c-.25.12-.58.21-1.15.26l-1.21.04V15.7zM8.3 10.04v3.92H4.36v-3.92zM13.96 10.04v3.92h-3.92v-3.92zM19.63 10.04v3.92H15.7v-3.92zM8.3 8.3H4.37q0-.72.04-1.22c.05-.57.14-.9.26-1.15q.43-.82 1.25-1.25c.25-.12.58-.21 1.15-.26q.5-.04 1.21-.04zM13.96 4.38v3.91h-3.92V4.38zM15.7 4.38q.72 0 1.22.04c.57.05.9.14 1.15.26q.82.43 1.25 1.25c.12.25.21.58.26 1.15q.04.5.04 1.21h-3.91z" opacity={0.4} />
        <path fillRule="evenodd" d="M14.81 2.63h.05q1.31-.01 2.2.05c.68.05 1.27.17 1.8.45a4.6 4.6 0 0 1 2.01 2c.28.54.4 1.13.45 1.8q.06.9.05 2.2v5.73q.01 1.31-.05 2.2a5 5 0 0 1-.45 1.8 4.6 4.6 0 0 1-2 2.01c-.54.28-1.13.4-1.8.45q-.9.06-2.2.05H9.13q-1.31.01-2.2-.05a5 5 0 0 1-1.8-.45 4.6 4.6 0 0 1-2.01-2 5 5 0 0 1-.45-1.8q-.06-.9-.05-2.21V9.14q-.01-1.31.05-2.2c.05-.68.17-1.27.45-1.8a4.6 4.6 0 0 1 2-2.01c.54-.28 1.13-.4 1.8-.45q.9-.06 2.2-.05h5.68m-4.77 17h3.92V15.7h-3.92zM4.38 15.7q0 .71.04 1.21c.05.57.14.9.26 1.15q.43.82 1.25 1.25c.25.12.58.21 1.15.26l1.21.04V15.7zm11.33 3.9q.71 0 1.21-.03c.57-.05.9-.14 1.15-.26q.82-.43 1.25-1.25c.12-.25.21-.58.26-1.15q.04-.5.04-1.21h-3.91zM4.38 13.97h3.91v-3.92H4.38zm5.66 0h3.92v-3.92h-3.92zm5.67 0h3.91v-3.92h-3.91zM8.29 4.38q-.71 0-1.21.04c-.57.05-.9.14-1.15.26q-.82.43-1.25 1.25c-.12.25-.21.58-.26 1.15q-.04.5-.04 1.21h3.91zm1.75 3.91h3.92V4.38h-3.92zm5.67 0h3.91q0-.71-.04-1.21c-.05-.57-.14-.9-.26-1.15q-.43-.82-1.25-1.25a3 3 0 0 0-1.15-.26q-.5-.04-1.21-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

GridFillDuotone.displayName = 'GridFillDuotone';

// Triple export pattern (lucide-react style)
export { GridFillDuotone, GridFillDuotone as GridFillDuotoneIcon, GridFillDuotone as SiGridFillDuotone };
export default GridFillDuotone;
export type { GridFillDuotoneProps };
