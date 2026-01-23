import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TagBoldDuotone = memo(
  forwardRef<SVGSVGElement, TagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.67 2c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l6.3 6.3q.59.57.97 1 .4.45.61 1.04a3 3 0 0 1 0 1.86q-.2.59-.61 1.03-.38.45-.97 1.01l-5.47 5.47q-.57.59-1 .97-.45.4-1.04.61a3 3 0 0 1-1.86 0q-.59-.2-1.03-.61-.45-.38-1.01-.97l-6.3-6.3c-.31-.3-.59-.57-.79-.9a3 3 0 0 1-.36-.87C2 12.5 2 12.12 2 11.67V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 1.99 6.2 2zM6.2 4c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C4 5.25 4 5.62 4 6.2v5.47c0 .54 0 .65.03.74q.03.15.12.28c.04.08.12.16.5.54l6.3 6.3q.58.59.88.85c.21.18.3.23.36.24a1 1 0 0 0 .62 0c.05-.01.15-.06.36-.24q.3-.25.89-.85l5.47-5.47c.4-.41.67-.68.85-.9.18-.2.23-.3.24-.35a1 1 0 0 0 0-.62 1 1 0 0 0-.24-.36 17 17 0 0 0-.85-.89l-6.3-6.3a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11C12.3 4 12.2 4 11.67 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.75 6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

TagBoldDuotone.displayName = 'TagBoldDuotone';

// Triple export pattern (lucide-react style)
export { TagBoldDuotone, TagBoldDuotone as TagBoldDuotoneIcon, TagBoldDuotone as SiTagBoldDuotone };
export default TagBoldDuotone;
export type { TagBoldDuotoneProps };
