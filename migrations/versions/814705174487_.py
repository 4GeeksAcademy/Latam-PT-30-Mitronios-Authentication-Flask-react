"""empty message

Revision ID: 814705174487
Revises: 3f0aac1013ee
Create Date: 2024-07-08 22:35:45.298916

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '814705174487'
down_revision = '3f0aac1013ee'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('user_user_name_key', type_='unique')
        batch_op.drop_column('user_name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.create_unique_constraint('user_user_name_key', ['user_name'])

    # ### end Alembic commands ###
