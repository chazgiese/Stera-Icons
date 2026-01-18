import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GiftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftFillDuotone = memo(
  forwardRef<SVGSVGElement, GiftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.48 1.02c.93-.1 1.82.22 2.55.95s1.05 1.62.95 2.55A4 4 0 0 1 17.6 7H13v7h7q.5 0 .9-.02l.1-.01v3.83q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H13v-8h-2v8H7.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-3.83l.1.01q.4.02.9.02h7V7H6.4l-.16-.16a4 4 0 0 1-1.22-2.32c-.1-.93.22-1.82.95-2.55a3 3 0 0 1 2.55-.95c.89.1 1.68.58 2.32 1.22q.66.66 1.16 1.6.5-.93 1.16-1.6a4 4 0 0 1 2.32-1.22M8.3 3c-.27-.03-.58.04-.92.37-.33.34-.4.65-.37.92q.03.47.64 1.13a6 6 0 0 0 3.27 1.49 6 6 0 0 0-1.49-3.27 2 2 0 0 0-1.13-.64m7.4 0q-.47.03-1.13.64a6 6 0 0 0-1.5 3.27c1.43-.2 2.6-.8 3.28-1.49a2 2 0 0 0 .64-1.13c.03-.27-.04-.58-.37-.92-.34-.33-.65-.4-.92-.37" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 22h-2v-8h2zM11 14H4q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q1 11.5 1 11v-1q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17Q3.5 7 4 7h7zM20 7q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.03-.9.02h-7V7z" />
    </IconBase>
  ))
);

GiftFillDuotone.displayName = 'GiftFillDuotone';

export { GiftFillDuotone };
export type { GiftFillDuotoneProps };
