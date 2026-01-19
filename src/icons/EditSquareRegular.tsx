import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EditSquareRegularProps = Omit<IconBaseProps, 'children'>;

const EditSquareRegular = memo(
  forwardRef<SVGSVGElement, EditSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square" {...props}>
      <path fill="currentColor" d="M11 2.25a.75.75 0 0 1 0 1.5H8A4.25 4.25 0 0 0 3.75 8v8c0 2.35 1.9 4.25 4.25 4.25h8c2.35 0 4.25-1.9 4.25-4.25v-3a.75.75 0 0 1 1.5 0v3A5.75 5.75 0 0 1 16 21.75H8A5.75 5.75 0 0 1 2.25 16V8A5.75 5.75 0 0 1 8 2.25z" />
        <path fill="currentColor" fillRule="evenodd" d="M16.35 2.35a3.75 3.75 0 0 1 5.3 5.3l-8.11 8.33a.8.8 0 0 1-.46.22l-5 .55a.75.75 0 0 1-.82-.87l.76-4.79.02-.1q.06-.18.18-.3zm4.24 1.06a2.25 2.25 0 0 0-3.18 0l-7.95 8.15-.57 3.59 3.76-.41 7.93-8.14h.01c.88-.89.88-2.31 0-3.2" clipRule="evenodd" />
    </IconBase>
  ))
);

EditSquareRegular.displayName = 'EditSquareRegular';

// Triple export pattern (lucide-react style)
export { EditSquareRegular, EditSquareRegular as EditSquareRegularIcon, EditSquareRegular as SiEditSquareRegular };
export default EditSquareRegular;
export type { EditSquareRegularProps };
