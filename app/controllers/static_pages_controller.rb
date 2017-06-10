class StaticPagesController < ApplicationController
  before_action :authenticate_user!, only: :ringtones
  def about
  end

  def contact
  end

  def ringtones

  end
end
